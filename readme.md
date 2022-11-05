# Tunnel Hook
Tunnel hook allows for a local tunnel to be specified while
providing the URL in a web hook hook. 

 - [x] Slack
 - [ ] Discord

## Run locally

Node 16+

Use yarn
`yarn install`

Run it
`yarn start`


## Using docker 
1. Clone the repo

    `git clone https://github.com/ImportProgram/tunnel-hook`

2. Install docker on your device, for example on a Raspberry Pi
    
    1. Update your OS
        
        `sudo apt-get update && sudo apt-get upgrade`

    2. Install docker

        `curl -sSL https://get.docker.com | sh`

    3. Install docker-compose (via python 3)

        `sudo pip3 install docker-compose`

    4. Run docker on boot

        `sudo systemctl enable docker`

2. Move directory into the tunnel hook

    `cd tunnel-hook`

3. Edit the config. Change the values in the **enviroment** section

    `nano docker-compose.yml`

    ```
      URL: ""
      PORT: 8000
      DOCKER: "true"
    ```

4. Run the docker compose command (with -d to deploy it) and its done!

    `docker-compose up -d`



