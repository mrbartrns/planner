from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Schedule
from api.serializers import ScheduleSerializer, SubScheduleSerializer

# Create your views here.
# TODO: 현재는 그냥 모든 데이터를 불러오도록 작성 후, 나중에 유저 인증을 하도록 변경


class ScheduleView(APIView):
    permission_classes = [AllowAny]
    serializer_class = ScheduleSerializer

    def get(self, request):
        data = Schedule.objects.all()
        return Response(
            self.serializer_class(data, many=True).data, status=status.HTTP_200_OK
        )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print("valid!!")
            data = serializer.save()
            return Response(
                self.serializer_class(data).data, status=status.HTTP_201_CREATED
            )
        print("not_valid")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostSubScheduleView(APIView):
    permission_classes = [AllowAny]
    serializer_class = SubScheduleSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = serializer.save()
            return Response(
                self.serializer_class(data).data, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
