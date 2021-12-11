import csv, json

def getEgyptCities():
    with open('egyptCities.txt', 'r') as egyptCities:
        cities = json.load(egyptCities)
        return cities

if __name__ =='__main__':
    pass