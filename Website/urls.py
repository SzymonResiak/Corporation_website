from .views import MeetingViewSet, DocumentViewSet
from rest_framework.routers import SimpleRouter
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = SimpleRouter()
router.register(r'meetings', MeetingViewSet, basename='meetings')
router.register(r'docs', DocumentViewSet)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] + router.urls
