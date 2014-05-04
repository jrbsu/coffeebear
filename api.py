import requests

response = requests.get("http://content.guardianapis.com/?show-fields=headline%2Cbody&show-elements=image&show-editors-picks=true&tag=technology&page-size=10&show-most-viewed=true&date-id=date%2Ftoday&api-key=mediahackdays2014")
print response