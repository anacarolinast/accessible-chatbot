import requests

def login(email, senha):
    url = ''
    payload = {
        'email': email,
        'senha': senha
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        data = response.json()
        token = data['token']

        with open('token.txt', 'w') as f:
            f.write(token)

        print('Token armazenado com sucesso!')
    else:
        print(f'Erro ao autenticar: {response.status_code} - {response.text}')

if __name__ == '__main__':
    email = input('Email: ')
    senha = input('Senha: ')
    login(email, senha)
