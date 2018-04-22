FROM nginx:alpine
RUN wget https://github.com/MatMaj/projekt-backend/archive/master.zip
RUN unzip master
RUN cp projekt-backend-master/* /usr/share/nginx/html/