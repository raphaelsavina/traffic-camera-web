#!/usr/local/bin/python
# test.py - test MySQL access and all

import MySQLdb
import MySQLdb.cursors
import sys
import urllib
import datetime
import hashlib

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

cursor1.execute ("SELECT * FROM webcam")
cursor2.execute ("SELECT * FROM webcamimage ")

result_set = cursor1.fetchall()
img=cursor2.fetchall()

for a in result_set:
   url = a["URL"]
   name = a["name"]
   check_size = urllib.urlopen(url)
   meta = check_size.info()
   image_size=meta.getheaders("Content-Length")[0]
   time_now = datetime.datetime.now()
   toMD5 = name + str(image_size) + str(time_now)
   blob = hashlib.md5(toMD5).hexdigest()

   print "%s -> %s -> %s" % (name, image_size, blob)
   # cursor.execute ("""
   #                   INSERT INTO webcamimage (`blob`, `webcam`, `timestamp`, `size`) 
   #                   VALUES (%s, %s, %s, %s)
   #                   """, (blob, name, time_now, image_size))


#   write image on disk
#   urllib.urlretrieve(url, name)
      
#conn.commit()
cursor1.close()
cursor2.close()
conn.close()