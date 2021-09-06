"""empty message

Revision ID: 9e602d824396
Revises: f3a37bdff77b
Create Date: 2021-09-06 13:36:14.043433

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e602d824396'
down_revision = 'f3a37bdff77b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('outfit', sa.Column('today_outfit', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('outfit', 'today_outfit')
    # ### end Alembic commands ###
