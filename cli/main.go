/*
Copyright © 2023 Breno Santos
*/
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	qrcodeTerminal "github.com/Baozisoftware/qrcode-terminal-go"

	"github.com/urfave/cli/v2"
)

type UrlStruct struct {
	Url string `json:"url"`
}

func main() {
	app := &cli.App{
		Name:  "Url Shortener",
		Usage: "Shorten your urls",
		Commands: []*cli.Command{
			{
				Name:    "create",
				Aliases: []string{"-c"},
				Usage:   "insert your URL",
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:     "url",
						Aliases:  []string{"u"},
						Usage:    "insert your URL",
						Required: true,
					},
				},
				Action: func(c *cli.Context) error {
					url := c.String("url")

					reqBody := []byte(`{"url":"` + url + `"}`)
					req, err := http.NewRequest("POST", "https://url-shortener-9zlu.onrender.com/url", bytes.NewBuffer(reqBody))

					req.Header.Set("Content-Type", "application/json")

					client := &http.Client{}
					res, err := client.Do(req)

					if err != nil {
						log.Fatal(err)
					}

					defer res.Body.Close()

					var decodedRes UrlStruct

					json.NewDecoder(res.Body).Decode(&decodedRes)

					fmt.Print("Your shortened URL is: ", decodedRes.Url, "\n")

					obj := qrcodeTerminal.New()

					obj.Get(decodedRes.Url).Print()

					return nil
				},
			},
		},
	}

	err := app.Run(os.Args)

	if err != nil {
		log.Fatal(err)
	}
}
