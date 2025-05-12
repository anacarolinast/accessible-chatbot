import requests
from utils import get_token

def acessar_dados_protegidos():
    token = get_token()
    if not token:
        return

    headers = {'Authorization': f'Bearer {token}'}
    url = ''
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        print('Dados protegidos:', response.json())
    else:
        print('Ocorreu um erro ao acessar dados:', response.status_code)

if __name__ == '__main__':
    acessar_dados_protegidos()
