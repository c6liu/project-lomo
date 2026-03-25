from django.shortcuts import render

# Create your views here.

class LomoView(viewsets.ModelViewSet):
    serializer_class = LomoSerializer
    queryset = Lomo.objects.all()
