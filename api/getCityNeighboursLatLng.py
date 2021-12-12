import csv

def getPathCitiesLatLng(cities):
    with open('egyptCitiesLat&LongUnicodeFormated.csv', 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        path = []
        # for city in cities:
        csvCities = {}
        for row in csv_reader:
            csvCities[row['city']] = row

        for city in cities:
            path.append(csvCities[city])
    return path

