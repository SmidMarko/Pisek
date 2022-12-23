export PYTHONPATH=$FIOI_COMMON/generators/
GEN_DIR="$( cd "$( dirname "$BASH_SOURCE[0]}" )" && pwd )"
python3 $GEN_DIR/generator.py $GEN_DIR
