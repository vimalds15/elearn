# Generated by Django 3.1.6 on 2021-03-24 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210324_0807'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='_id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
