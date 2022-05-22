from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Meeting, Document


class MeetingSerializer(ModelSerializer):
    class Meta:
        model = Meeting
        fields = ['title', 'description', 'time']

class DocumentSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Document
        fields = ['title', 'file']