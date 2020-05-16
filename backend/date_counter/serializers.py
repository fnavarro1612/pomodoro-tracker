import datetime

from date_counter.models import Date_Counter
from rest_framework import serializers


class DateCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date_Counter
        fields = ['id', 'date', 'count', 'user']
        read_only_fields = ['user']
