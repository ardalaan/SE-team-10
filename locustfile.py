from locust import HttpUser, task, constant


class HelloWorldUser(HttpUser):

    @task
    def helo_world(self):
        self.client.get('/index.php?r=user%2Fpeople')
    @task(2)
    def hello_world(self):
        self.client.get('/index.php?r=space%2Fspaces')
    @task(3)
    def helllo_world(self):
        self.client.get('/index.php?r=calendar%2Fglobal%2Findex')
    @task(4)
    def helllo_world(self):
        self.client.get('/index.php?r=tasks%2Fglobal')
