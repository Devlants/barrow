# Generated by Django 4.1.3 on 2022-11-03 09:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('_account', '0001_initial'),
        ('_product', '0002_alter_product_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Deal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('type', models.CharField(choices=[(1, '직거래만'), (2, '택배거래만'), (3, '택배/직거래')], max_length=20)),
                ('state', models.CharField(choices=[('WAIT', '대기중'), ('LEND', '대여중'), ('TERMINATE', '종료')], default='WAIT', max_length=20)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='_product.product')),
                ('user_cons', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cons', to='_account.user')),
                ('user_prod', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prod', to='_account.user')),
            ],
        ),
    ]
