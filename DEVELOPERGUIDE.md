# Developer Guide



## Getting started


### Installation

The project can be installed either as a whole (main, client, and server) together or separetely:

- To install it as whole:
	1. From the `client` folder, run
    	```

    	npm install

    	```
	
	2. Then, run
		``` 

		npm run install-both 

		```

	This will install the dependencies for the main folder, the client, and the server.

- To install it separetely:
	+ To install the dependencies from the `client` folder - from the `client` folder, run
	  ```

	  npm install

	  ```
	  *The dependecies in the `client` folder helps to install and run both client and server together during development*
	+ To install the client folder,
		1. Go to the client folder,
			```

			cd client

			```
		2. Then, run
		```

		npm install --legacy-peer-deps

		```

	+ To install the server folder
		1. Go to the server folder,
		```

		cd server

		```
		2. Then, run
		```

		npm install

		```


#### Run the web interface

The web interface can be run locally either as a whole (client and server) or separately:

- To run locally (developer mode) as a whole:

	From the `client` folder, run:

	```

	npm run develop:prod

	```

- To run just the client locally (developer mode):

	1. From the `client` folder, run:

		```

		npm run develop:client

		```

	2. From the `client` folder, run:

		```

		npm run develop

		```

 - To run just the server locally (developer mode):
   
   1. From the `client` folder, run:
   
   		```

   		npm run develop:server

   		```

   	2. From the `server` folder, run:
   	
   		```

   		npm start

   		```

   	

