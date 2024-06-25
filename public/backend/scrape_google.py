from flask import jsonify
from googlesearch import search

def scrape_google(request):
    data = request.get_json()
    query = data['query']
    num_results = 5  # You can adjust the number of results here
    search_results = [result for result in search(query, num_results=num_results)]
    return jsonify({"results": search_results})
