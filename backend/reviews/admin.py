from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'language', 'sentiment', 'confidence', 'created_at')
    list_filter = ('sentiment', 'language')
    search_fields = ('text', 'translated')
    


