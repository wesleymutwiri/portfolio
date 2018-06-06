from django.db import models
import datetime as dt 


# Create your models here.
class Images(models.Model):
    image_name = models.CharField(max_length=30, blank=True)
    image_description = models.CharField(max_length=120,blank= True)
    pub_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to = 'articles/', blank=True)

    class Meta:
        ordering = ['-pub_date']   
    
    def save_image(self):
        self.save()
    
    def delete_image(self):
        self.delete() 
    
    @classmethod
    def update_image(cls,id,target,update):
        update = cls.objects.filter(id=id).update(target=update)
        return update
    
    @classmethod
    def get_all_images(cls):
        images = cls.objects.order_by('-pub_date')
        return images