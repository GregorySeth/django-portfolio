from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control bg-dark border-secondary text-warning', 'placeholder':'Imię i nazwisko'}), error_messages={'required': 'Uzupełnij swoje dane'})
    email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'class': 'form-control bg-dark border-secondary text-warning', 'placeholder':'Adres e-mail'}), error_messages={'required': 'Uzupełnij adres mailowy', 'invalid': 'Niepoprawny adres'})
    subject = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control bg-dark border-secondary text-warning', 'placeholder':'Temat'}), error_messages={'required': 'Uzupełnij temat wiadomości'})
    content = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control bg-dark border-secondary text-warning', 'placeholder':'Treść wiadomości'}), error_messages={'required': 'Uzupełnij treść wiadomości'})
