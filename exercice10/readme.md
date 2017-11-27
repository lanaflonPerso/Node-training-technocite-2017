To dump db 
-------------
mongodump -v --host 127.0.0.1 --archive=magasins.gz --gzip --db magasins --collection magasins

To restore db
---------------
mongorestore -v --host 127.0.0.1 --archive=C:\Users\t_9073_nodejs\Desktop\magasins.gz --gzip --drop