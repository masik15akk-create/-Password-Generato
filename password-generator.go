package main

import (
    "flag"
    "fmt"
    "math/rand"
    "time"
)

func generatePassword(length int, useDigits, useSpecial bool) string {
    letters := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    digits := "0123456789"
    special := "!@#$%^&*()_+~`|}{[]:;?><,./-="

    charset := letters
    if useDigits {
        charset += digits
    }
    if useSpecial {
        charset += special
    }

    rand.Seed(time.Now().UnixNano())
    password := make([]byte, length)
    for i := range password {
        password[i] = charset[rand.Intn(len(charset))]
    }
    return string(password)
}

func main() {
    length := flag.Int("l", 12, "длина пароля")
    noDigits := flag.Bool("no-digits", false, "исключить цифры")
    noSpecial := flag.Bool("no-special", false, "исключить спецсимволы")
    flag.Parse()

    password := generatePassword(*length, !*noDigits, !*noSpecial)
    fmt.Println(password)
}
