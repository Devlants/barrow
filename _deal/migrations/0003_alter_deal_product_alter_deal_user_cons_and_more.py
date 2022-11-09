from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('_product', '0003_product_created'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('_deal', '0002_alter_deal_product_alter_deal_user_cons_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deal',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deal', to='_product.product'),
        ),
        migrations.AlterField(
            model_name='deal',
            name='user_cons',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='buy', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='deal',
            name='user_prod',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sell', to=settings.AUTH_USER_MODEL),

        ),
    ]
