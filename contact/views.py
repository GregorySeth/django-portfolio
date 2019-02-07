from django.shortcuts import render, redirect, render_to_response
from contact.forms import ContactForm
import sendgrid
import os
from sendgrid.helpers.mail import *

try:
    from .password import *
except ImportError:
    pass

# Create your views here.
def contact(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            name = request.POST.get('name', '')
            email = request.POST.get('email', '')
            topic = request.POST.get('subject', '')
            content = request.POST.get('content', '')

            from_email = Email(email)
            subject = topic
            content = Content("text/plain", content + "\n\n\n" + name)
            mail = Mail(from_email, subject, to_email, content)
            response = sg.client.mail.send.post(request_body=mail.get())
            print(response.status_code)
            print(response.body)
            print(response.headers)

            return redirect('success')
        else:
            return render(request, 'contact/home.html', {'form':form})

    else:
        form = ContactForm()
    return render(request, 'contact/home.html', {'form':form})


def success(request):
    return render(request, 'contact/success.html')
