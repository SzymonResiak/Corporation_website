from rest_framework import viewsets
from .models import Meeting
from .serializers import MeetingSerializer
from rest_framework.permissions import IsAuthenticated


class MeetingViewSet(viewsets.ReadOnlyModelViewSet):
    def get_queryset(self):
        user = self.request.user
        return Meeting.objects.filter(members=user)
    serializer_class = MeetingSerializer
    permission_classes = [IsAuthenticated]
