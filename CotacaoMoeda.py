import json
import requests

moedas_disponiveis = ["USD", "EUR", "BRL", "JPY"]

for moeda in moedas_disponiveis:
    print(f"-{moeda}")

origem = input("Moeda de origem: ")
dest = input("Moeda de destino: ")

if origem in moedas_disponiveis and dest in moedas_disponiveis:
    try:
        requisicao = requests.get(f"https://economia.awesomeapi.com.br/{origem}-{dest}")
        requisicao.raise_for_status()  # Verifica se houve algum erro na requisição
        cotacao = requisicao.json()

        # Certifique-se de que a resposta contém dados válidos
        if cotacao and isinstance(cotacao, list) and "bid" in cotacao[0]:
            print(f"1 {origem} equivale a {float(cotacao[0]['bid']):.2f} {dest}")
            print(f"Nome da moeda: {cotacao[0]['name']}")
            print(f"Valor do Bid: {cotacao[0]['bid']}")
        else:
            print("Erro na resposta da API ou dados ausentes.")
    except requests.exceptions.RequestException as e:
        print(f"Erro na requisição: {e}")
else:
    print("Moedas de origem ou destino não disponíveis.")
