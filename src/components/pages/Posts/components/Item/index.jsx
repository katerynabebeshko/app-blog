import React from "react";
import PropTypes from "prop-types";
import Btn from "components/shared/Btn";
import styles from "./styles.module.scss";

const Item = props => {
  const { post, removePost, showEditForm } = props;
  const {
    id,
    title,
    short_description: shortDescription,
    date_update: { date }
  } = post;
  const dateValue = new Date(date).toLocaleDateString();
  const remove = () => removePost(id);
  const edit = () => showEditForm(post);

  return (
    <div className={styles.root}>
      <Btn type="del" onClick={remove} />
      <Btn type="edit" onClick={edit} />
      <span>{dateValue}</span>
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.description}>{shortDescription}</h2>
    </div>
  );
};

Item.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date_update: PropTypes.object.isRequired,
    short_description: PropTypes.string.isRequired
  }).isRequired,
  removePost: PropTypes.func.isRequired,
  showEditForm: PropTypes.func.isRequired
};

export default Item;
