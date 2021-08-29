"""empty message

<<<<<<< HEAD:migrations/versions/4cd91e931908_.py
Revision ID: 4cd91e931908
Revises: 
Create Date: 2021-08-29 17:11:13.270615
=======
Revision ID: 3668f51c6980
Revises: 
Create Date: 2021-08-19 15:15:03.248794
>>>>>>> main:migrations/versions/3668f51c6980_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<< HEAD:migrations/versions/4cd91e931908_.py
revision = '4cd91e931908'
=======
revision = '3668f51c6980'
>>>>>>> main:migrations/versions/3668f51c6980_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nickname', sa.String(length=120), nullable=False),
    sa.Column('gender', sa.Enum('female', 'male', 'nonbinary', name='gender'), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=True),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('repeat_password', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('clothing',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('category', sa.Enum('top', 'bottom', 'footwear', name='category'), nullable=False),
    sa.Column('clean', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('collection',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=True),
    sa.Column('collection_user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.ForeignKeyConstraint(['collection_user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('outfit',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('outfit_user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('favorite', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['outfit_user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('clothing_outfit',
    sa.Column('clothing_id', sa.Integer(), nullable=False),
    sa.Column('outfit_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['clothing_id'], ['clothing.id'], ),
    sa.ForeignKeyConstraint(['outfit_id'], ['outfit.id'], ),
    sa.PrimaryKeyConstraint('clothing_id', 'outfit_id')
    )
    op.create_table('collection_outfit',
    sa.Column('outfit_id', sa.Integer(), nullable=False),
    sa.Column('collection_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['collection_id'], ['collection.id'], ),
    sa.ForeignKeyConstraint(['outfit_id'], ['outfit.id'], ),
    sa.PrimaryKeyConstraint('outfit_id', 'collection_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('collection_outfit')
    op.drop_table('clothing_outfit')
    op.drop_table('outfit')
    op.drop_table('collection')
    op.drop_table('clothing')
    op.drop_table('user')
    # ### end Alembic commands ###
