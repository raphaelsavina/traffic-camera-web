#!/usr/bin/python
"""Regularly fetch all pictures from remote location and store in the datastore."""
import logging
import os
import urllib
import MySQLdb
import MySQLdb.cursors
import sys
import hashlib
import datetime

#Logging into fetch.log
logging.basicConfig(filename='fetch.log',level=logging.INFO)

try:
   conn = MySQLdb.connect (host = "localhost",
                             user = "root",
                             passwd = "xxxxxxxxxx",
                             db = "traffic_cam")
except MySQLdb.Error, e:
   print "Error %d: %s" % (e.args[0], e.args[1])
   sys.exit (1)

cursor1 = conn.cursor(cursorclass=MySQLdb.cursors.DictCursor)
cursor2 = conn.cursor(cursorclass=MySQLdb.cursors.DictCursor)
cursor3 = conn.cursor()

cursor1.execute ("SELECT * FROM webcam")
cam = cursor1.fetchall()

for listcam in cam:
	try:
		url = listcam["URL"]
		name = listcam["name"]
		
		for_size = urllib.urlopen(url)
		meta = for_size.info()
		image_size=int(meta.getheaders("Content-Length")[0])
		# Get last image for size
		cursor2.execute ("SELECT size FROM webcamimage WHERE webcam = %s ORDER BY timestamp DESC", name)
		img = cursor2.fetchone()

		# Test just in case this is 1st time an image is fetch
		try:
			old_size = int(img["size"])
		except:
			old_size = 0
		if old_size==image_size:
			#Same size as before, no fetching, just logging for debugging
			#logging.info("SAME: %s (OLD: %s- New: %s)" % (name, old_size, image_size))
			pass
		else:
			#Size is different, new image to be fetched
			time_now = datetime.datetime.now()
			logging.info("%s - Fetching: %s (OLD:%s-New:%s)" % (time_now, name, old_size, image_size))
			toMD5 = name + str(image_size) + str(time_now)
			blob = hashlib.md5(toMD5).hexdigest()
			# write image on disk
			fullpath = name + "/" + blob + ".jpg"
			#save file
			f = open(fullpath, 'wb')
			f.write(urllib.urlopen(url).read())
			f.close()
			#Insert info in the database
			cursor3.execute("INSERT INTO webcamimage (`blob`, `webcam`, `timestamp`, `size`) VALUES (%s, %s, %s, %s)", (blob, name, time_now, image_size))
			conn.commit()

	except Exception, e:
		logging.error("Error fetching data: %s" % e)
		pass

#Close all MySQL connection 		
conn.commit()
cursor1.close()
cursor2.close()
cursor3.close()
conn.close()
