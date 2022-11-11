# Generated by Django 4.1.3 on 2022-11-09 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('_product', '0001_initial'),
        ('_account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='favorite',
            field=models.ManyToManyField(related_name='favor', to='_product.product'),
        ),
        migrations.AddField(
            model_name='user_view',
            name='product',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='_product.product'),
            preserve_default=False,
        ),
    ]
