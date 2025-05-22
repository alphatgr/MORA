from django.shortcuts import render,redirect
from .models import Customer, Login
from django.contrib import messages
from rest_framework import generics



# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def service(request):
    return render(request, 'service.html')

def login(request):
    if request.method == 'POST':
        userid = request.POST['userid']
        password = request.POST['password']
        try:
            obj = Login.objects.get(user_id=userid, password=password) #to get all obejct = Login.objects.all()
            request.session['email'] = userid
            if obj.user_id == userid:
                user = Customer.objects.get(email_address=userid)
                return render(request,'index1.html')
            messages.success(request, 'Login Successful')
        except Login.DoesNotExist:
            messages.error(request, 'Invalid User')
    return render(request, 'login.html')

def index1(request):
    return render(request, 'index1.html')

def register(request):
    if request.method == "POST":
        name = request.POST['name']
        contactno = request.POST['contact_number']
        emailaddress = request.POST['email']
        password = request.POST['password']
        status = 'false'
        cus = Customer(name=name, contact_number=contactno, email_address=emailaddress)
        log = Login(user_id=emailaddress, password=password, status=status)
        cus.save()
        log.save()
        messages.success(request, 'Customer registration is done')
        return redirect('login')
    return render(request, 'register.html')
    


