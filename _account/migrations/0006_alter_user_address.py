# Generated by Django 4.1.3 on 2022-11-28 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('_account', '0005_alter_user_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='address',
            field=models.TextField(max_length=100),
        ),
    ]
