from django.db import models

# Create your models here.
class Login(models.Model):
    user_id = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=128)  # It's recommended to store passwords as hash values
    status = models.CharField(max_length=20, choices=[('Active', 'Active'), ('Inactive', 'Inactive')])
    
class Customer(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    address = models.TextField()
    contact_number = models.CharField(max_length=15)
    email_address = models.EmailField()
    password = models.CharField(max_length=10)
    loyalty_points = models.IntegerField(default=0)
