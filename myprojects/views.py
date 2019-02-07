from django.shortcuts import render, get_object_or_404
from .models import Project

# Create your views here.
def projects(request):
    projects = Project.objects.order_by('pk')
    return render(request, 'myprojects/home.html', { 'projects':projects })
def detail(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    return render(request, 'myprojects/detail.html', { 'project':project })
