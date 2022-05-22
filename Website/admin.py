from django.contrib import admin
from .models import Meeting


@admin.register(Meeting)
class MetingAdmin(admin.ModelAdmin):
    search_fields = ('title', 'description')
    list_display = ('title', 'time')
