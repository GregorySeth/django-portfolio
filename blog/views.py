from django.shortcuts import render, get_object_or_404
from .models import Blog

# Create your views here.
def blog(request):
    blogs = Blog.objects.order_by('-publication_date')
    return render(request, 'blog/home.html', { 'blogs':blogs })

def detail(request, blog_id):
    blogpost = get_object_or_404(Blog, pk=blog_id)
    return render(request, 'blog/post.html', { 'blog':blogpost })
