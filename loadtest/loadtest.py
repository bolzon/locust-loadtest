import time
from locust import HttpUser, task, between

class ServerLoadtest(HttpUser):
  wait_time = between(1, 7)

  def on_start(self):
    self.client.post('/login')

  @task(15)
  def home_page(self):
    self.client.get('/')  

  @task(80)
  def products_page(self):
    for product_id in range(10):
      self.client.get(f'/products?id={product_id}', name='/products')
      time.sleep(1)

  @task(5)
  def checkout_page(self):
    self.client.get('/checkout')
