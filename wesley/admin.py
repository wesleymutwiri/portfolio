from django.contrib import admin
from .models import Images 

# Register your models here.

# class ImagesAdmin(admin.ModelAdmin):
    # filter_horizontal = ('category')
admin.site.register(Images)