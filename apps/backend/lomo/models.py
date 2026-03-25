from django.db import models

class Account(models.Model):
    email = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    location = models.ForeignKey(Location, null=True, on_delete=SET_NULL)
    phone1 = models.CharField(max_length=10, blank=True)
    phone2 = models.CharField(max_length=10, blank=True)

class Location(models.Model):
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100)
    province = models.CharField(max_length=100)

class Request(models.Model):
    account = models.ForeignKey(Account, on_delete=SET_NULL)
