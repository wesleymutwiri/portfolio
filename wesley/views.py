from django.shortcuts import render
import datetime as dt 
from .models import Images 

# Create your views here.
def index(request):
    date = dt.date.today
    image  = Images.objects.all()
    return render(request,'wesley/index.html', {"date":date, "image":image})