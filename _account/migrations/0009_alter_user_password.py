# Generated by Django 4.1 on 2022-11-09 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('_account', '0008_alter_user_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=20),
        ),
    ]
