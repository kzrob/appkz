from urllib.parse import urlparse
import json
import csv

ALLOWED_EXTENSIONS = set(['csv'])

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def parseCSV(file):
	with open(file, "r", encoding="utf-8-sig") as csvfile:
		csvreader = csv.reader(csvfile)

		browserhistory = []
		for row in csvreader:
			browserhistory.append(row)

	domainDict = {}

	for row in browserhistory:
		try:
			domainDict[urlparse(row[1]).netloc] += 1
		except KeyError:
			domainDict[urlparse(row[1]).netloc] = 1

	sortedDict = dict(sorted(domainDict.items(), key=lambda x:x[1], reverse=True))
	formattedDict = json.dumps(sortedDict).replace(",", "\n")

	return formattedDict
