import random
import string
import argparse

def generate_password(length=12, use_digits=True, use_special=True):
    chars = string.ascii_letters
    if use_digits:
        chars += string.digits
    if use_special:
        chars += string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Генератор паролей")
    parser.add_argument("-l", "--length", type=int, default=12, help="Длина пароля (по умолчанию 12)")
    parser.add_argument("--no-digits", action="store_true", help="Исключить цифры")
    parser.add_argument("--no-special", action="store_true", help="Исключить спецсимволы")
    args = parser.parse_args()

    pwd = generate_password(
        length=args.length,
        use_digits=not args.no_digits,
        use_special=not args.no_special
    )
    print(pwd)
