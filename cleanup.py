#!/usr/local/bin/python
"""Regularly remove oldest images from the datastore"""
import logging
import os
import urllib
import MySQLdb
import MySQLdb.cursors
import sys
import hashlib
import datetime

#os.remove(filePath)

#Logging into fetch.log
logging.basicConfig(filename='clean.log',level=logging.INFO)

try:
   connc = MySQLdb.connect (host = "localhost",
                             user = "root",
                             passwd = "xxxxxxxxxx",
                             db = "traffic_cam")
except MySQLdb.Error, e:
   print "Error %d: %s" % (e.args[0], e.args[1])
   sys.exit (1)

cursor1 = connc.cursor(cursorclass=MySQLdb.cursors.DictCursor)
cursor2 = connc.cursor(cursorclass=MySQLdb.cursors.DictCursor)
cursor3 = connc.cursor()

cursor1.execute ("SELECT * FROM webcam")
cam = cursor1.fetchall()

# Deleting all image more than 10 hours old
time_now = datetime.datetime.now()
query_time = time_now - datetime.timedelta(hours=48)

for listcam in cam:
	try:
		name = listcam["name"]
		cursor2.execute ("SELECT * FROM webcamimage WHERE webcam = %s ORDER BY timestamp DESC", name)
		img = cursor2.fetchall()
		#print "Name %s - LEN: %s" % (name, len(img))

		# We need to keep at least 10 images for each camera
		count = len(img)
		if count > 10:
			for image in img:
				timestamp = image["timestamp"]
				if timestamp < query_time:
					webcam = image["webcam"]
					blob = image["blob"]
					size = image["size"]
					filePath =  name + "/" + blob + ".jpg"
					#print "DELETE %s - TIME:%s" % (filePath, timestamp)
					logging.info("%s - DELETE %s" % (time_now, filePath))
					os.remove(filePath)
					cursor3.execute ("DELETE FROM webcamimage WHERE `blob` = %s LIMIT 1", blob)
					connc.commit()
					count - 1
			if count == 10:
				break
	except Exception, f:
		logging.error("Error fetching data: %s" % f)

cursor1.close()
cursor2.close()
cursor3.close()
connc.close()
