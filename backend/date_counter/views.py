import datetime


from date_counter.models import Date_Counter
from date_counter.serializers import DateCounterSerializer
from django.shortcuts import render
from rest_framework import permissions, generics


class DateCounterCreateView(generics.ListCreateAPIView):
    queryset = Date_Counter.objects.all()
    serializer_class = DateCounterSerializer

    def get_queryset(self):
        if self.request.method == "POST":
            self.queryset = self.queryset.filter(
                user=self.request.user, date=datetime.datetime.today())
            return self.queryset
        only_user_list = self.queryset.filter(user=self.request.user)
        return only_user_list

    def perform_create(self, validated_data):
        date_counter, created = Date_Counter.objects.get_or_create(
            date=datetime.datetime.today(), user=self.request.user,
            defaults={'date': datetime.date.today(),
                      'user': self.request.user,
                      'count': validated_data.validated_data.get('count')
                      }
        )
        if not created:
            date_counter.count = validated_data.validated_data.get('count')
            date_counter.save()

        return date_counter

    permission_classes = [
        permissions.IsAuthenticated
    ]
