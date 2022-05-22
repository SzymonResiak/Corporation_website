from rest_framework import viewsets
from .models import Meeting, Document
from .serializers import MeetingSerializer, DocumentSerializer
from rest_framework.permissions import IsAuthenticated


class MeetingViewSet(viewsets.ReadOnlyModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return Meeting.objects.filter(members=user)
    serializer_class = MeetingSerializer
    permission_classes = [IsAuthenticated]

class DocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    permission_classes = [IsAuthenticated]