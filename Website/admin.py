from django.contrib import admin
from .models import Meeting, Document


@admin.register(Meeting)
class MetingAdmin(admin.ModelAdmin):
    search_fields = ('title', 'description')
    list_display = ('title', 'time')


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    search_fields = ('title',)
