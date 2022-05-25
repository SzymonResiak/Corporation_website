from rest_framework import viewsets
from .models import Meeting, Document
from .serializers import MeetingSerializer, DocumentSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from django.http import FileResponse


class MeetingViewSet(viewsets.ReadOnlyModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return Meeting.objects.filter(members=user)

    serializer_class = MeetingSerializer
    permission_classes = [IsAuthenticated]


class DocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def retrieve(self, request, pk):
        document = get_object_or_404(Document, id=pk)
        response = FileResponse(document.file)
        response["Content-Disposition"] = "attachment; filename=" + document.file.name
        return response
